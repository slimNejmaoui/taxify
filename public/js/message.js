$(document).ready(function() {

	$("#close_dialog").click(function(e) {
		HideDialog();
		e.preventDefault();
	});
	$("#overlay").click(function(e) {
		HideDialog();
	});
});

function HideDialog() {
	$("#overlay").hide();
	$("#dialog").fadeOut(300);
}
