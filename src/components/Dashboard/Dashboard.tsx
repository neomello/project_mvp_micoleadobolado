import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { firestoreService } from '../../services/firestore';

interface UserData {
  name: string;
  email: string;
  purchases: any[];
}

export const Dashboard = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const data = await firestoreService.get('users', 'email', user.email);
          if (data.length > 0) {
            setUserData(data[0]);
          }
        } catch (error) {
          console.error('Erro ao buscar dados do usuário:', error);
        }
        setLoading(false);
      }
    };

    fetchUserData();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
          
          {userData ? (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-medium text-gray-900">Informações Pessoais</h2>
                <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Nome</p>
                    <p className="mt-1 text-sm text-gray-900">{userData.name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="mt-1 text-sm text-gray-900">{userData.email}</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-gray-900">Histórico de Compras</h2>
                {userData.purchases && userData.purchases.length > 0 ? (
                  <div className="mt-2">
                    {userData.purchases.map((purchase, index) => (
                      <div key={index} className="border-b py-4">
                        <p className="text-sm text-gray-900">{purchase.productName}</p>
                        <p className="text-sm text-gray-500">Data: {new Date(purchase.date).toLocaleDateString()}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-gray-500">Nenhuma compra realizada.</p>
                )}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">Carregando dados do usuário...</p>
          )}
        </div>
      </div>
    </div>
  );
}; 