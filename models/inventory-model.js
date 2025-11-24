const { query } = require("../database/")
const { get } = require("../routes/static")

/* ***************************
 *  Get all classification data
 * ************************** */
async function getClassifications(){
  return await query("SELECT * FROM public.classification ORDER BY classification_name")
}

/* ***************************
 *  Get all inventory items and classification_name by classification_id
 * ************************** */
async function getInventoryByClassificationId(classification_id) {
  try {
    const data = await query(
      `SELECT * FROM public.inventory AS i 
      JOIN public.classification AS c 
      ON i.classification_id = c.classification_id 
      WHERE i.classification_id = $1`,
      [classification_id]
    )
    return data.rows
  } catch (error) {
    console.error("getclassificationsbyid error " + error)
  }
}

/* ***************************
 * Fetching vehicle by inv_id
 * ************************** */
async function getVehicleByInvId(inv_id) {
  try {
    // validate/normalize the id
    const id = Number.parseInt(inv_id, 10)
    if (Number.isNaN(id)) {
      return null
    }

    const data = `SELECT
      i.inv_id,
      i.inv_make,
      i.inv_model,
      i.inv_year,
      i.inv_description,
      i.inv_image,
      i.inv_thumbnail,
      i.inv_price,
      i.inv_miles,
      i.inv_color,
      i.classification_id,
      c.classification_name
    FROM public.inventory AS i
    JOIN public.classification AS c
      ON i.classification_id = c.classification_id
    WHERE i.inv_id = $1
    LIMIT 1`

    const result = await query(data, [id])
    return result.rows[0] || null
  } catch (error) {
    console.error("getVehicleByInvId error:", error)
    throw error
  }
}

module.exports = {getClassifications, getInventoryByClassificationId, getVehicleByInvId}