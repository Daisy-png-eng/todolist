$(document).ready(function() {
    // Task Add Karne ke liye
    $('#add-btn').on('click', function() {
        var task = $('#task-input').val();
        
        if (task.trim() !== "") {
            $('#task-list').append('<li><input type="checkbox"> ' + task + ' <span class="delete">×</span></li>');
            $('#task-input').val(''); // Input reset
        }
    });

    // Task Delete Karne ke liye
    $(document).on('click', '.delete', function() {
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
    });

    // Task Complete Toggle Karne ke liye
    $(document).on('change', 'input[type="checkbox"]', function() {
        $(this).parent().toggleClass('completed');
    });
});