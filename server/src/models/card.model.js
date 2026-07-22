import mongoose from "mongoose";

//  Schema for saved card configurations (a user's customized card)

const cardSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    platform: {
      type: String,
      required: true,
      lowercase: true,
      enum: ["github", "leetcode", "gfg"],
    },
    theme: {
      type: String,
      default: "dark",
    },

    //! User's colour overrides. Empty object = use the theme's own colours.
    colors: {
      background: { type: String },
      text: { type: String },
      accent: { type: String },
      border: { type: String },
    },

    layout: {
      type: String,
      default: "default",
    },

    //? Which stat keys to display. Empty array = show all the adapter returned.
    visibleStats: {
      type: [String],
      default: [],
    },

    //? Short id used in the embed URL so the link stays clean.
    slug: {
      type: String,
      unique: true,
      sparse: true,
    },
  },
  { timestamps: true },
);

const Card = mongoose.model("Card", cardSchema);

export default Card;