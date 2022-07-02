import DirectoryItem from '../directory-item/directory-item.component';

import { DirectoryContainer } from './directory.styles';

const categories = [
  {
    id: 1,
    title: 'Șepci',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: 'shop/șepci',
  },
  {
    id: 2,
    title: 'Jachete',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: 'shop/jachete',
  },
  {
    id: 3,
    title: 'Pantofi',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/pantofi',
  },
  {
    id: 4,
    title: 'Femei',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/femei',
  },
  {
    id: 5,
    title: 'Bărbați',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
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
