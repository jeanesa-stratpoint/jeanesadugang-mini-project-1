export interface Hobby {
  id: string;
  title: string;
  image: string;
  category: string;
  highlightWord: string;
  description: string[];
  images: string[];
}

export const HOBBIES_DATA: Hobby[] = [
    {
        id: "writing",
        title: "Writing",
        image: "/hobbies/writing.jpg",
        category: "Writing",
        highlightWord: "writing",
        description: [
            "In March 2025, I was awarded 1st place in poetry writing and 2nd place in the flash fiction category by our university publication.",
            "Back in high school, I also wrote for our campus paper, which gave me valuable experience in expressing ideas clearly.",
            "Beyond competitions and publications, I write personally to capture special moments and preserve them in words."
        ],
        images: ["/hobbies/writing-3.jpeg", "/hobbies/writing.jpg", "/hobbies/writing-2.jpg", "/hobbies/writing-4.jpeg"]
    },
    {
        id: "badminton",
        title: "Badminton",
        image: "/hobbies/badminton.jpg",
        category: "Sports",
        highlightWord: "badminton",
        description: [
            "In April 2025, I was awarded 2nd place in the 3rd Pasiklaban Badminton Women’s Division, a sports and cultural event organized by our university’s physical education department.",
            "Back in high school, I also joined intramurals and discovered how much I enjoyed the game.",
            "Even now, I love spending time on the court with friends, it’s both fun and a great way to stay active."
        ],
        images: ["/hobbies/badminton.jpg", "/hobbies/badminton-2.jpg", "/hobbies/badminton-3.jpg", "/hobbies/badminton-4.jpg"]
    },
    {
        id: "movies",
        title: "Movies and Series",
        image: "/hobbies/movie.jpg",
        category: "Entertainment",
        highlightWord: "movies and series",
        description: [
            "I enjoy watching drama, sci-fi, fiction, and mystery. Some of my favorites carry meaningful messages about life, others are simply entertaining, and a few spark inspiration.",

            "Anne with an E (2017)",
            "Bridgerton (2020)",
            "Mga Kuwentong Barbero (2013)",
            "The Breakup Playlist (2015)",
            "Stranger Things (2016)",
            "Marvel TV Series",
            "Alice in Borderland (2020)"
        ],
        images: ["/hobbies/movie.jpg", "/hobbies/movie-2.jpg", "/hobbies/movie-3.jpg", "/hobbies/movie-4.jpg", "/hobbies/movie-5.jpg", "/hobbies/movie-6.jpg"]
    },
    {
        id: "music",
        title: "Music",
        image: "/hobbies/music.png",
        category: "Lifestyle",
        highlightWord: "music",
        description: [
            "I enjoy listening to music every day, and there are artists whose songs I never skip because I connect with them so much. I especially love OPM, but I also listen to a mix of international favorites.",

            "Songs I enjoy:",
            "Mahika, Pahina, Lagi, The Archer",

            "Artists I love:",
            "TJ Monterde, Cup of Joe,The Ridleys, BINI, Sarah Geronimo, Taylor Swift, The 1975"
        ],
        images: ["/hobbies/music.png", "/hobbies/music-2.jpg", "/hobbies/music-3.jpg", "/hobbies/music-4.jpg", "/hobbies/music-5.jpg", "/hobbies/music-6.jpg"]
    },
]