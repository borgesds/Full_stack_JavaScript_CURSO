module.exports = {
    get AU_IN_KILOMETERS() {return 149587870}, 
    covertAUtoKm(au) {
        return au * this.AU_IN_KILOMETERS
    }
}