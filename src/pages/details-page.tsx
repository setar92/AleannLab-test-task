import { FC } from 'react';
import { useParams } from 'react-router-dom';

const DetailesPage: FC = () => {
  const { id } = useParams();
  return (
    <div>
      <p>details id: {id}</p>
    </div>
  );
};

export { DetailesPage };
