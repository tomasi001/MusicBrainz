// This application will make use of the javascript library, which was built to help with queries.

// https://github.com/Borewit/musicbrainz-api

/*

The music brainz api is sorted By entities

ENTITY TYPES

1)Normal Entities

Artist

-   An artist is generally a musician, group of musicians, a collaboration of 
    multiple musicians or other music professionals who contribute to works 
    described in the MusicBrainz Database. They can also be a non-musical person 
    (like a photographer, an illustrator, or a poet whose writings are set to music), 
    or even a fictional character.

-   Artist credits are a list of artists, variations of artist names and pieces 
    of text to join the artist names.


Event
-   An organised event which people can attend, and is relevant to MusicBrainz. 
    Events generally refer to live performances, like concerts and festivals.


Label
-   Labels are generally imprints on releases, and to a lesser extent, 
    the record companies behind those imprints.


Place
-   Places are areas smaller than a geographical region (like a building or an outdoor area) 
    used to perform or produce music. It could range from a stadium to a religious building 
    to an indoor arena.


Recording
-   Recordings are unique audio data. It has a title, artist credit, and duration. 
    Recordings can be linked to tracks on releases. Each track must always be associated 
    with a single recording, but a recording can be linked to any number of tracks.


Release
-   Releases are real-world release objects (like a physical album) that you can buy 
    in your music store. When a musical product is issued on a specific date with 
        specific information such as the country, label, barcode and packaging, it is a release.

-   A medium is a piece of media included in a release. It contains information about 
    the format, position in the release and an optional title as well as a list of tracks. 
    Several media exist, including but not limited to: CD, 12" vinyl, digital media. 
    A medium normally has a tracklist.

-   A track contains a link to a recording, title, artist credit and the position on the medium. 
    A track is different from a recording in that it is unique to a release; a number of different 
    releases can contain the same recording.


Release Group
-   Release groups are an abstract "album" entity. Technically it's a group of releases, with a specified type.


Series
-   A series is a sequence of separate release groups, releases, recordings, works or events with a 
    common theme. The theme is usually prominent in the branding of the entities in the series and 
    the individual entities will often have been given a number indicating the position in the series.


URL
-   A URL represents a regular Internet Uniform Resource Locator and an associated description of that URL.


Work
-   A work is a distinct intellectual or artistic creation, which can be expressed in the form 
    of one or more audio recordings. While a recording represents audio data, a work represents 
    the composition behind the recording.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

2) Entities with editing restrictions
The following entities can only be added by privileged users. See details on the specific entity 
page for more information on how to request getting new ones added.

Area
-   Areas are historical and existing geographic regions. Areas include countries, sub-divisions, 
    counties, municipalities, cities, districts and islands.


Genre
-   Genres are a way to categorize music based on its style or other common characteristic.


Instrument
-   Instruments are devices created or adapted to make musical sounds.

*/
//

// let AuthUser = function (data) {
//   return google.login(data.username, data.password).then((token) => {
//     return token
//   })
// }

// let userToken = AuthUser(data)
// console.log(userToken) // Promise { <pending> }

// userToken.then(function (result) {
//   console.log(result) // "Some User token"
// })

// export const mbQuery = async () => {
//   try {
//     return await fetch("https://musicbrainz.org/ws/2/artist/?query=artist:mndsgn&fmt=json").then(
//       (response) => {
//         return response.json()
//       }
//     )
//     //   .then((data) => {
//     //     return data
//     //   })
//     // const filteredArtistIds = filter_data(artistIds);
//   } catch (err) {
//     console.error(err) // process error
//   }
// }

// import { MusicBrainzApi } from "musicbrainz-api"

// function MBAPIQuery({ res }) {
//   return <>{console.log({ res })}</>
// }

// // This function gets called at build time on server-side.
// // It may be called again, on a serverless function, if
// // revalidation is enabled and a new request comes in
// export const getStaticProps = async () => {
//   const mbApi = new MusicBrainzApi({
//     appName: "musicbrainz-web-app",
//     appVersion: "0.0.1",
//     appContactInfo: "tom.shields001@gmail.com",
//   })

//   const res = await mbApi.searchArtist({ query: "Stromae" }).then((response) => {
//     console.log(response)
//     return response
//   })

//   return {
//     props: {
//       res,
//     },
//     revalidate: 1,
//   }
// }

// export default MBAPIQuery

// export const getStaticProps = async () => {
//   const mbApi = new MusicBrainzApi({
//     appName: "musicbrainz-web-app",
//     appVersion: "0.0.1",
//     appContactInfo: "tom.shields001@gmail.com",
//   })

//   const res = await mbApi.searchArtist({ query: "Stromae" }).then((response) => {
//     console.log(response)
//     return response
//   })

//   return {
//     props: {
//       res,
//     },
//     revalidate: 1,
//   }
// }

// export const MBAPIQuery = ({ res }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   // will resolve posts to type Post[]
//   console.log(res)
//   return <></>
// }

// export default MBAPIQuery

export {}
