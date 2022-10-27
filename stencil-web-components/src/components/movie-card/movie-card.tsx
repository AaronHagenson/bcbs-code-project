import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'movie-card',
  styleUrl: 'movie-card.css',
  shadow: true,
})
export class MovieCard {
  /**
   * The movie title
   */
  @Prop() name: string;

  /**
   * The movie description
   */
  @Prop() description: string;

  /**
   * The url for the image
   */
  @Prop() image: string;

  render() {
    return (
      <div class='movie-card'>
        <div class={'left-content'}>
          <img src={this.image} />
        </div>
        <div class={'right-content'}>
          <h2>{this.name}</h2>
          <p>{this.description}</p>
        </div>
      </div>
    );
  }
}
