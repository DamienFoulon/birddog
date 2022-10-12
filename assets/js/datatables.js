$(document).ready( function () {
	let table = $('#camera_table').DataTable({
		language: { search: "" },
		// Hide the table length select
		lengthChange: false,
		// Hide the table info
		info: false,
		// Hide the navigation buttons
		paging: false,
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