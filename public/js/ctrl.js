
angular.module("app-controllers", [])
    .controller("mainCtrl", function(){
        var self = this;
        
        self.title = "Favorite Movie App",
        self.movies = [
            {
                title: "Total Recall (1990 film)",
                year: 1990,
                plot: 'Total Recall is a 1990 American science fiction action film directed by Paul Verhoeven, starring Arnold Schwarzenegger, Rachel Ticotin, and Sharon Stone. The film is loosely based on the Philip K. Dick story "We Can Remember It for You Wholesale".',
                favorite: true
            },
            {
                title: "The Lawnmower Man",
                year: 1992,
                plot: 'The Lawnmower Man is a 1992 American science fiction action horror film directed by Brett Leonard and written by Brett Leonard and Gimel Everett. The film is named after a Stephen King short story of the same name, but aside from a single scene, the stories are unrelated. The film stars Jeff Fahey as Jobe Smith, a simple-minded gardener, and Pierce Brosnan as Dr. Lawrence Angelo, the scientist who decides to experiment on him.',
                favorite: true
            },
            {
                title: "The Matrix",
                year: 1999,
                plot: 'The Matrix is a 1999 American–Australian neo-noir science fiction action film written and directed by The Wachowskis, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future in which reality as perceived by most humans is actually a simulated reality called "the Matrix", created by sentient machines to subdue the human population, while their bodies heat and electrical activity are used as an energy source. Computer programmer "Neo" learns this truth and is drawn into a rebellion against the machines, which involves other people who have been freed from the "dream world".',
                favorite: true
            }
        ]
    });