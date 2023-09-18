import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypeSelector';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector((state: any) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    }

    return <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)} type='text'/>
            <button>Search</button>
        </form>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && 
            data.map((name: string) => <div key={name}>{name}</div>) 
        }
    </div>
};

export default RepositoriesList;