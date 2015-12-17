angular.module("app-controllers", [])
    .controller("mainCtrl", function(){
        var self = this;
        
        self.title = "Favorite Movie App",
        self.movies = [
            {
                title: "Total Recall",
                year: 1990,
                plot: 'Total Recall is a 1990 American science fiction action film directed by Paul Verhoeven, starring Arnold Schwarzenegger, Rachel Ticotin, and Sharon Stone. The film is loosely based on the Philip K. Dick story "We Can Remember It for You Wholesale".',
                favorite: true
            },
            {
                title: "The Lawnmower Man",
                year: 1992,
                plot: 'The Lawnmower Man is a 1992 American science fiction action horror film directed by Brett Leonard and written by Brett Leonard and Gimel Everett. The film is named after a Stephen King short story of the same name, but aside from a single scene, the stories are unrelated. The film stars Jeff Fahey as Jobe Smith, a simple-minded gardener, and Pierce Brosnan as Dr. Lawrence Angelo, the scientist who decides to experiment on him.',
                favorite: false
            },
            {
                title: "The Matrix",
                year: 1999,
                plot: 'The Matrix is a 1999 American–Australian neo-noir science fiction action film written and directed by The Wachowskis, starring Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving, and Joe Pantoliano. It depicts a dystopian future in which reality as perceived by most humans is actually a simulated reality called "the Matrix", created by sentient machines to subdue the human population, while their bodies heat and electrical activity are used as an energy source. Computer programmer "Neo" learns this truth and is drawn into a rebellion against the machines, which involves other people who have been freed from the "dream world".',
                favorite: true
            },
            {
                title: "Armageddon",
                year: 1998,
                plot: 'Armageddon is a 1998 American science fiction disaster thriller film directed by Michael Bay, produced by Jerry Bruckheimer, and released by Touchstone Pictures. The film follows a group of blue-collar deep-core drillers sent by NASA to stop a gigantic asteroid on a collision course with Earth. It features an ensemble cast including Bruce Willis, Ben Affleck, Billy Bob Thornton, Liv Tyler, Owen Wilson, Will Patton, Peter Stormare, William Fichtner, Michael Clarke Duncan, Keith David, and Steve Buscemi',
                favorite: false
            },
            {
                title: "Deep Impact",
                year: 1998,
                plot: 'Deep Impact is a 1998 American science fiction disaster film[3] directed by Mimi Leder, written by Bruce Joel Rubin and Michael Tolkin, and starring Robert Duvall, Téa Leoni, Elijah Wood, Vanessa Redgrave, Maximilian Schell, Leelee Sobieski, and Morgan Freeman. Steven Spielberg served as an executive producer of this film. It was released by Paramount Pictures and DreamWorks Pictures in the United States on May 8, 1998. The film depicts the attempts to prepare for and destroy a 7-mile (11 km) wide comet set to collide with the Earth and cause a mass extinction.',
                favorite: false
            }
        ];
        
        self.addMovie = function() {
            self.movies.push(self.new);
            self.new = {};
        }
    });