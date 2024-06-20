import {useEffect, useState} from "react";
import {fetchFakeRecords} from "../services/mock/data.ts";
import {Report} from '../commons/interfaces/Report.ts';

export const useFetchReports = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
          const response = await fetchFakeRecords();
          setReports(response)
      } catch (e) {
        setError('Unable to fetch reports');
      } finally {
        setLoading(false);
      }
    }

    fetchReports();
  }, []);

  return {loading, error, reports};
}
