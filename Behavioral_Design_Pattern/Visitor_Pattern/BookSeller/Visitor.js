const XmasVisitor = function(){
    this.visit = function(visitable){
        const tenPercent = visitable.getPrice() * 0.1;
        visitable.setPrice(visitable.getPrice() - tenPercent);
    };
};

const xmasvisitor = new XmasVisitor();

module.exports = xmasvisitor;
