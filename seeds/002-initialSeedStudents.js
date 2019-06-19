exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students").insert([
    { name: "Dan", cohort_id: 2 },
    { name: "Garrett", cohort_id: 1 }
  ]);
};
