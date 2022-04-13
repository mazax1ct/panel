let containers = document.querySelectorAll('.panel__grids-container');

function makeList() {
    let fragment = new DocumentFragment();

    arr.forEach(function(item, i, arr) {
        console.log(item);
        let cell = document.createElement('div');
        cell.className = "panel__grid-cell";
        cell.style.left = item.left + '%';
        cell.style.top = item.top + '%';
        cell.style.width = item.width + '%';
        cell.style.height = item.height + '%';
        fragment.append(cell);
    });

    return fragment;
}

for (let container of containers) {
  container.append(makeList());
}
