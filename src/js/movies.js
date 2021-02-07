const movieContainer = document.querySelector('#movie-container');
const modal = document.querySelector('#gameModal');

const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');
const tableBody = document.querySelector('.table-body');

import { timeConverter } from './timeConverter';

movieContainer.innerHTML = `<div class="spinner-border text-light" role="status">
    <span class="sr-only">Loading...</span>
  </div>`;

$.ajax({
  url:
    'https://www.cheapshark.com/api/1.0/games?title=batman&limit=60&exact=0p',
  success: function (data, status, xhr) {
    data.forEach((movie) => {
      const { thumb, external, cheapest, gameID } = movie;

      $('.spinner-border').remove();

      movieContainer.innerHTML += `
        <div class="col-md-3">
            <div class="card">
            <img
                class="card-img-top"
                src=${thumb}
                alt="Card image cap"
            />
            <div class="card-body p-4">
                <h5 class="card-title">${external}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Cheapest Price: $${cheapest}</h6>
                <button type="button" id=${gameID} data-toggle="modal" data-target="#gameModal" class="btn btn-outline-info btn-block game-modal-trigger">
                    <a href="#"></a>See the details
                </button>
            </div>
            </div>
        </div>
        `;
    });

    $('.game-modal-trigger').click(function (event) {
      getCurrentGameInfo(event.target.id);
    });
  },
  error: function () {
    console.error('Games not found');
  },
});

function getCurrentGameInfo(gameID) {
  $.ajax({
    url: `https://www.cheapshark.com/api/1.0/games?id=${gameID}`,
    success: function (data, status, xhr) {
      modalTitle.innerText = data.info.title;

      console.log(data);

      $('.game-info').html(`<div class="row">
        <div class="col-md-4">
          <img class="modal-image" src=${data.info.thumb} alt="" />
        </div>
        <div class="col-md-8">
            <h5>Cheapest Price: $${data.cheapestPriceEver.price}</h5>
            <h5>
            
            Cheapest Price Date: <br/> ${timeConverter(
              data.cheapestPriceEver.date
            )}</h5>
            
        </div>
      </div>`);

      data.deals.map((deal) => {
        tableBody.innerHTML += `
              <tr>
                <td>${deal.price}</td>
                <td>${deal.retailPrice}</td>
                <td>
                <a href=${`https://www.cheapshark.com/redirect?dealID=${deal.dealID}`} _blank>
                <button class="btn btn-info btn-block">
                    Check The Deal
                </button>
                </a>  
                </td>
              </tr>
              `;
      });
    },
    error: function () {
      console.error('Game not found');
    },
  });
}
