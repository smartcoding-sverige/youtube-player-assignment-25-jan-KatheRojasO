/**
 * @param { import(knex).Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw('TRUNCATE TABLE id CASCADE');
  await knex.raw('TRUNCATE TABLE video CASCADE');

  await knex('id').insert([
    {
      videoId: "_3ngiSxVCBs",
      kind: "youtube#video",
      name: "a nice video"
    },
    {
      videoId: "3zTR4ayDG38",
      kind: "youtube#video",
      name: "a cool video"
    },
    {
      videoId: "aSJUS2tymZA",
      kind: "youtube#video",
      name: "a fantastic video"
    },
    {
      videoId: "6zEIvZqs0-Y",
      kind: "youtube#video",
      name: "yet another cool video"
    },
    {
      videoId: "pJuq8D1NGJQ",
      kind: "youtube#video",
      name: "some video"
    }
  ])
  await knex('video').insert([
    {
      videoId: "_3ngiSxVCBs" ,
      kind: "youtube#searchResult",
      etag: "tamwb8xWafaFK3WYUiRjWVPKOCM"
    },
    {
      videoId: "3zTR4ayDG38",
      kind: "youtube#searchResult",
      etag: "n9DniKGa4RMTCv9hs3aOcxsSzPY"
    },
    {
      videoId: "aSJUS2tymZA",
      kind: "youtube#searchResult",
      etag: "I_vfY1pIPWvk49XZ_WWkBynL88U"
    },
    {
      videoId: "6zEIvZqs0-Y",
      kind: "youtube#searchResult",
      etag: "fVwysHySGlQcaVwDLkjtP1DDWFk"
    },
    {
      videoId: "pJuq8D1NGJQ",
      kind: "youtube#searchResult",
      etag: "lw9CuIh2Zla8HqQdq78u4sTaVIk"
    }

  ])
    
};
