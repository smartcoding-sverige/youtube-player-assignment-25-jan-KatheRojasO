import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    //await knex("table_name").del()

    // Inserts seed entries
    await knex("video").insert([
        {
          videoId: "_3ngiSxVCBs",
          name: "a nice video"
        },
        {
          videoId: "3zTR4ayDG38",
          name: "a cool video"
        },
        {
          videoId: "aSJUS2tymZA",
          name: "a fantastic video"
        },
        {
          videoId: "6zEIvZqs0-Y",
          name: "yet another cool video"
        },
        {
          videoId: "pJuq8D1NGJQ",
          name: "some video"
        }
      ]);
};
