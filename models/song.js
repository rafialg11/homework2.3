module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            title: String,
            artists: String,
            url: String,
            playCount: { type: Number, default: 0 } 
        }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Song = mongoose.model("songs", schema)
    return Song
}

