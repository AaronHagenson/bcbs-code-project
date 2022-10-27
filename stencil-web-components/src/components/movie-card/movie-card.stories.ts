export default {
    // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
    title: 'Components/MovieCard',
};

const Template = (args) => `<movie-card name="${args.name}" description="${args.description}" image="${args.image}"></my-component>`;

export const MovieCard = Template.bind({});
MovieCard.args = {
  name: 'Home Alone',
  description: 'A kid is home alone.',
  image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
};