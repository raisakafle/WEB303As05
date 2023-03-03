/*
    Assignment 05
    Author's Name: Nihar Rajanikant Sadhu
    Date: 2023-02-26
*/

$("document").ready(function () {

    
    class ContentItem {
        
        
        constructor(id, f_name, description, category_genre) {
            this.id = id;
            this.f_name = f_name;
            this.description = description;
            this.category_genre = category_genre;
        }

        updateContentItem(id, f_name, description, category_genre) {

            if (this.id === id) {
                if (f_name) {
                    this.f_name = f_name;
                }
                if (description) {
                    this.description = description;
                }
                if (category_genre) {
                    this.category_genre = category_genre;
                }
            }
        }

        toString() {
            let content = `<div class="content-item-wrapper" id="content-item-id${this.id}">`;
            content += `<h2>${this.f_name}</h2>`;
            content += `<p>${this.description}</p>`;
            content += `<div>${this.category_genre}</div>`;
            content += `</div>`;
            return content;
        }
    }

    const topRatedMovies = [
        new ContentItem(0, 'The Shawshank Redemption', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 'Drama'),
        new ContentItem(1, 'The Godfather', 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.', 'Crime'),
        new ContentItem(2, 'The Dark Knight', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 'Action'),
        new ContentItem(3, 'Inception', 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.', 'Sci-Fi'),
        new ContentItem(4, 'Forrest Gump', 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.', 'Comedy-Drama')
      ];
      

    for (let i = 0; i < topRatedMovies.length; i++) {
        const ratedLists = topRatedMovies[i];
        const htmlItems = ratedLists.toString();
        $("#content-item-list").append(htmlItems);
    }

    $('.content-item-wrapper').css({
        'border': '1px solid #ccc',
        'width': '80%',
        'padding': '20px',
        'margin': '50px auto'
      });  


      // Button to update an existing ContentItem successfully
    $('#update-successful').on('click', function () {
        const itemToUpdate = topRatedMovies[0];
        itemToUpdate.updateContentItem('The Dark Knight Rises', 'A 2012 superhero film directed by Christopher Nolan, based on the DC Comics character Batman.', 'Action');
        const updatedHtml = itemToUpdate.toString();
        $('#content-item-id0').replaceWith(updatedHtml);
    });

    // Button to update an existing ContentItem unsuccessfully
    $('#update-unsuccessful').on('click', function () {
        const itemToUpdate = topRatedMovies[1];
        itemToUpdate.updateContentItem(null, null, null); // Passing null to all arguments to trigger the error
        const updatedHtml = itemToUpdate.toString();
        $('#content-item-id1').replaceWith(updatedHtml);
    });

    // Button styling
    $('button').css({
        'background-color': '#007bff',
        'color': '#fff',
        'border': 'none',
        'border-radius': '5px',
        'padding': '10px',
        'margin': '10px',
        'cursor': 'pointer'
    });

      
});



