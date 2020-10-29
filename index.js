function handleListAdd() {
    $('#js-shopping-list-form').on('submit', function(event) {
            // prevent default of submit event
            event.preventDefault();
            // save value new list item as a variable
            let listEntry = $('#shopping-list-entry').val();
            // empty entry field after saving val
            $('#shopping-list-entry').val('');
            console.log(listEntry);
            // append listEntry to shopping list with html
            $('.shopping-list').append(
                `<li>
          <span class="shopping-item">${listEntry}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);

        })
}

function handleCheck() {
    // on click of toggle button run function 
    $('.shopping-list').on( "click", '.shopping-item-toggle', function(event) {
        // access full li element with closest and save it as a variable
        let $li = $(this).closest('li');
        console.log($li);
        $li.find('span.shopping-item').toggleClass('shopping-item__checked')
    })
}
$(handleListAdd)
$(handleCheck)