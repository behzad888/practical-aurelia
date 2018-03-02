export class SearchForValueConverter {
    toView(array, searchString) {
        if (!searchString) {
            return array;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        // Using the forEach helper method to loop through the array
        array.forEach(function (item) {
            if (item.login.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            }
        });
        return result;       
    }
}