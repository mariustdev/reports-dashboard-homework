import {useEffect, useState} from "react";
import {Report} from '../commons/interfaces/Report.ts';
import {API_SECRET_KEY} from "../config.ts";

export const useFetchReports = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
          const response = await fetch('/integrations/v3/scope/667ac4a1979c90daff3863ca/applications', {
            headers: {
              apiKey: API_SECRET_KEY,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          });

        if (!response.ok) {
          setError('Unable to fetch reports');
        } else {
          const {items} = await response.json();
          setReports(items);
        }
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
