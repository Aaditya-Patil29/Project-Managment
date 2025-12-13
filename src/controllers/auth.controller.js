import { User } from "../models/user.models";
import{ApiResponce} from "../utils/api-response.js";
import{ApiError} from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";

const generateAccessAndrefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave: false})
        return {accessToken, refreshToken}
    } catch (error) {
        throw new ApiEroro(
            500,
            "Something went wrong while generating access token"
        );
    }
};

const registerUser = asyncHandler(async (req, res) => {
    const {email, username, password, role} = req.body

    const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })

    if(existedUser){
        throw new ApiError(409, "User withemail or username already exist",[])
    }

    const user = await User.create({
        email,
        password,
        username,
        isEmailVerified: false
    })

    const { unHashedToken, hashedToken, tokenExpiry } = user.generateTemporaryToken();
})