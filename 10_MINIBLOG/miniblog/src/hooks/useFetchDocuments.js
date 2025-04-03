import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search) => {
  const [documents, setDocuments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDocuments = async () => {
      if (!docCollection) {
        console.error("Erro: Nome da coleção não foi fornecido.");
        setError("Erro ao buscar documentos.");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const collectionRef = collection(db, docCollection);
        let q;

        if (search) {
          q = query(collectionRef, where("tagsArray", "array-contains", search), orderBy("createdAt", "desc"));
        } else {
          q = query(collectionRef, orderBy("createdAt", "desc"));
        }

        const querySnapshot = await getDocs(q);
        const results = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setDocuments(results);
        console.log("Posts carregados:", results);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
        setError("Erro ao buscar documentos.");
      } finally {
        setLoading(false);
      }
    };

    loadDocuments();
  }, [docCollection, search]);

  return { documents, loading, error };
};
