$(document).ready( function () {
	let table = $('#camera_table').DataTable({
		// Change de default text if the table is empty
		language: { search: "", emptyTable: "Aucun membre actif" },
		// Hide the table length select
		lengthChange: false,
		// Hide the table info
		info: false,
		// Hide the navigation buttons
		paging: false,
		// Allow sorting on the first column only
		columnDefs: [
			{ orderable: true, targets: 1 },
			{ orderable: false, targets: '_all' }
		],
	});
	// push the search bar into table-controller
	$('.dataTables_filter').appendTo('.table-controller');
	// push the search icon into the search bar
	$('.dataTables_filter label').prepend('<i class="icon-search"></i>');
	// push the placeholder into the search bar
	$('.dataTables_filter input').attr('placeholder', 'Recherche');
	// push the entry counter into table-controller
	$('.table-controller').append(`<div class="entry_counter"><p>Nombre d'entrées : <span>${table.data().length}</span></p></div>`);
});

// Toggle selected class on row click and add the rec icon close to the first name
$('#camera_table tbody').on('click', 'tr', function () {
	$(this).toggleClass('selected');
	$(this).find('td:first-child .rec').toggleClass('visible');
});
