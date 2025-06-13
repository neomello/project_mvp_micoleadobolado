import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  Timestamp,
  addDoc,
  DocumentData,
  Query
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { User, Newsletter } from '../types/firestore';

// Helper functions
const getTimestamp = () => Timestamp.now().toString();

// User operations
export const userService = {
  async create(user: Omit<User, 'createdAt'>): Promise<void> {
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      ...user,
      createdAt: getTimestamp()
    });
  },

  async get(uid: string): Promise<User | null> {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? (userSnap.data() as User) : null;
  },

  async update(uid: string, data: Partial<User>): Promise<void> {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      ...data,
      updatedAt: getTimestamp()
    });
  },

  async delete(uid: string): Promise<void> {
    const userRef = doc(db, 'users', uid);
    await deleteDoc(userRef);
  }
};

// Newsletter operations
export const newsletterService = {
  async subscribe(email: string): Promise<void> {
    const newsletterRef = doc(collection(db, 'newsletters'));
    await setDoc(newsletterRef, {
      id: newsletterRef.id,
      email,
      status: 'active',
      subscribedAt: getTimestamp()
    });
  },

  async unsubscribe(email: string): Promise<void> {
    const q = query(collection(db, 'newsletters'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      await updateDoc(doc.ref, {
        status: 'unsubscribed',
        unsubscribedAt: getTimestamp()
      });
    }
  },

  async listSubscribers(): Promise<Newsletter[]> {
    const q = query(
      collection(db, 'newsletters'),
      where('status', '==', 'active'),
      orderBy('subscribedAt', 'desc')
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data() as Newsletter);
  }
};

export const firestoreService = {
  // Criar um novo documento
  async create(collectionName: string, data: DocumentData) {
    try {
      const docRef = await addDoc(collection(db, collectionName), {
        ...data,
        createdAt: new Date(),
      });
      return docRef.id;
    } catch (error) {
      console.error('Erro ao criar documento:', error);
      throw error;
    }
  },

  // Atualizar um documento
  async update(collectionName: string, id: string, data: DocumentData) {
    try {
      const docRef = doc(db, collectionName, id);
      await updateDoc(docRef, {
        ...data,
        updatedAt: new Date(),
      });
    } catch (error) {
      console.error('Erro ao atualizar documento:', error);
      throw error;
    }
  },

  // Deletar um documento
  async delete(collectionName: string, id: string) {
    try {
      const docRef = doc(db, collectionName, id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Erro ao deletar documento:', error);
      throw error;
    }
  },

  // Buscar documentos
  async get(collectionName: string, field?: string, value?: any) {
    try {
      let q: Query<DocumentData> = collection(db, collectionName);
      
      if (field && value) {
        q = query(q, where(field, '==', value));
      }

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Erro ao buscar documentos:', error);
      throw error;
    }
  }
};