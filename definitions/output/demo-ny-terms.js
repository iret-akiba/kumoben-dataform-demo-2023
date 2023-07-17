const stateNames = ["NY", "TX", "OR", "CA", "KS"];

stateNames.forEach(stateName => {
    publish(`demo-${stateName.toLowerCase()}-terms`, {
    type: "table",
    tags: [`${constants.JS_DEMO_TAG}`],
  })
  .query(ctx =>`
  SELECT
    term
    ,rank
  FROM
    ${ctx.ref("demo-table-2")}, UNNEST(${ctx.ref("demo-table-2")}.x)
　  WHERE
    ${functions.getStateAbbreviation("dma_name")} = stateName
  GROUP BY
    term, rank, ${functions.getStateAbbreviation("dma_name")}
  ORDER BY
    rank
  `);
});
