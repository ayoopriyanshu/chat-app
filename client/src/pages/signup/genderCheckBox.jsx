const Gendercheckbox = ({ onCheckBoxChange, selectedGender }) => {
    return (
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer mt-2 mb-3 ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text font-mono text-gray-300">Male</span>
                    <input type="checkbox" name="gender" className="checkbox border-slate-900" checked={selectedGender === "male"} onChange={() => onCheckBoxChange("male")} />
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer mt-2 mb-3 ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text font-mono text-gray-300">Female</span>
                    <input type="checkbox" name="gender" className="checkbox border-slate-900" checked={selectedGender === "female"} onChange={() => onCheckBoxChange("female")} />
                </label>
            </div>
        </div>
    )
}

export default Gendercheckbox