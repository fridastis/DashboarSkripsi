// Fungsi untuk mengisi tabel Gini
function isiTabelGini(layer_xgboost_1) {
    // Reset tabel sebelum mengisi data baru
    var tbody = document.getElementById('gini-table-body');
    tbody.innerHTML = '';

    // Iterasi melalui setiap fitur di layer
    layer_xgboost_1.eachLayer(function(layer) {
        var props = layer.feature.properties;
        var row = document.createElement('tr');

        var kecamatanCell = document.createElement('td');
        kecamatanCell.textContent = props['nmkec'];
        kecamatanCell.style.padding = '4px';

        var giniCell = document.createElement('td');
        giniCell.textContent = props['Gini ratio'].toFixed(2);
        giniCell.style.textAlign = 'right';
        giniCell.style.padding = '4px';

        row.appendChild(kecamatanCell);
        row.appendChild(giniCell);

        tbody.appendChild(row);
    });
}