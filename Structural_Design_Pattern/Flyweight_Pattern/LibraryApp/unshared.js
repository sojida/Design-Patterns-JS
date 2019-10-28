const extrinsicBook = function(checkoutDate, checkoutMember, dueReturnDate, availability){
    this.checkoutDate = checkoutDate;
    this.checkoutMember = checkoutMember;
    this.dueReturnDate = dueReturnDate;
    this.availability = availability;
}


module.exports = extrinsicBook