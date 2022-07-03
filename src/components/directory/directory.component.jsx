import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Șepci',
    imageUrl: 'https://i.im.ge/2022/07/02/uLQuk4.jpg',
    route: 'shop/șepci',
  },
  {
    id: 2,
    title: 'Jachete',
    imageUrl: 'https://i.im.ge/2022/07/02/uLQOFC.jpg',
    route: 'shop/jachete',
  },
  {
    id: 3,
    title: 'Pantofi',
    imageUrl: 'https://i.im.ge/2022/07/02/uLQ1jq.jpg',
    route: 'shop/pantofi',
  },
  {
    id: 4,
    title: 'Femei',
    imageUrl: 'https://i.im.ge/2022/07/02/uLQ0WL.jpg',
    route: 'shop/femei',
  },
  {
    id: 5,
    title: 'Bărbați',
    imageUrl: 'https://i.im.ge/2022/07/02/uLQijc.jpg',
    route: 'shop/bărbați',
  },
];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
