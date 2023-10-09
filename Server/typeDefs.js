export const typeDefs = `#graphql
    type LoginOutput {
        token: String
    }

    type Status{
        status: Boolean,
        message: String
    }
    type Songs{
        title:String!
        releaseDate:String!
        artist:String
        duration:String
    }
    type ArtistOutput {
        name:String
        profilePicture:String
        songs:[Songs]
    }

    type Query {
        login(email: String!, password: String!): LoginOutput
        register(userName: String!, password: String!,email: String!): LoginOutput
        artist(id:String!): ArtistOutput
    

    }

    type Mutation {
        updateSong(id: String!, title: String, artist: String, songDuration: String, songPostedYear: String): Status
        createSong(title: String!, artist: String!, songDuration: String!, songPostedYear: String!): Status
        deleteSong(id: String!): Status
        createArtist(name: String, profilePicture: String, songs: [String]): Status
    }

`