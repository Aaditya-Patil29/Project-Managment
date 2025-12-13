import{ApiResponce} from "../utils/api-response.js";
import { asyncHandler } from "../utils/async-handler.js";
/**

const healthcheck = async (req, res, next) => {
    try {
        const user = await getuserFromDB()
        res
        .satus(200)
        .json(new ApiResponce(200, {message: "Server is running "}));
        }catch (error) {
        next (err)
        }
};
*/

const healthcheck = asyncHandler(async (req, res, next) => {
    res.status(200).json (new ApiResponce(200, {message: "Server is running"}));

});

export {healthcheck};