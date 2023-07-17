publish("demo-ny-terms", {
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
    ${functions.getStateAbbreviation("dma_name")} = "NY"
  GROUP BY
    term, rank, ${functions.getStateAbbreviation("dma_name")}
  ORDER BY
    rank
  `)
;