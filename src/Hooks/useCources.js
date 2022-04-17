import { useEffect, useState } from "react"

const useCources = () => {
  const [cources, setCources] = useState([]);

  useEffect(() => {
    fetch('courcesData.json')
    .then(res => res.json())
    .then(data => setCources(data));
  }, []);

  return [cources, setCources];
}

export default useCources;