// json2html.js

export default function json2html(data) {
    let table = '<table data-user="annukousalya@gmail.com">';
    
    // Add table header
    table += '<thead><tr>';
    const columns = ['Name', 'Age', 'Gender'];
    columns.forEach(col => {
        table += `<th>${col}</th>`;
    });
    table += '</tr></thead>';
    
    // Add table body
    table += '<tbody>';
    data.forEach(row => {
        table += '<tr>';
        table += `<td>${row.Name || ''}</td>`;
        table += `<td>${row.Age || ''}</td>`;
        table += `<td>${row.Gender || ''}</td>`;
        table += '</tr>';
    });
    table += '</tbody>';
    
    table += '</table>';
    return table;
}
