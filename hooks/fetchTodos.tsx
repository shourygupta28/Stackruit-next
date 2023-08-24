import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase';

interface FetchTodosResult {
    loading: boolean;
    error: string | null;
    todos: Array<string> | null;
    setTodos: React.Dispatch<React.SetStateAction<Array<string> | null>>;
}

export default function useFetchTodos(): FetchTodosResult {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [todos, setTodos] = useState<Array<string> | null>(null);

    const { currentUser } = useAuth();

    useEffect(() => {
        async function fetchData() {
            try {
                if(currentUser){
                const docRef = doc(db, 'users', currentUser.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setTodos('todos' in docSnap.data() ? docSnap.data().todos : []);
                } else {
                    setTodos([]);
                }
            }
            } catch (err) {
                setError('Failed to load todos');
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [currentUser]);

    return { loading, error, todos, setTodos };
}
