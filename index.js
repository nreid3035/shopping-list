function handleListAdd() {
    $('#js-shopping-list-form').on('submit', function(event) {
            // prevent default of submit event
            event.preventDefault();
            // save value new list item as a variable
            let listEntry = $('#shopping-list-entry').val();
            console.log(listEntry);
            // append listEntry to shopping list
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

}
$(handleListAdd)