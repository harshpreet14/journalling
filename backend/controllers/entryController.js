

exports.getAllEntries = (req,res) =>{
    res.status(200).json({
        status: 'success',
        results: entries.length,
        data: {
            entries
        }
    })
};

exports.deleteAllEntries = (req,res) => {

}

exports.getEntry = (req, res)=>{

    res.status(200).json({
        status:'success'
    })
}

exports.createEntry = (req, res)=>{

    res.status(201).json({
        status:'success'
    })
}

exports.updateEntry = (req,res)=> {

}

exports.deleteEntry = (req,res)=>{

}
