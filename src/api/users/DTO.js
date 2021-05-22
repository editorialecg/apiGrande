export async function sendDataLogin(name, username, department, updated_at){
    return {
        name: name,
        username: username,
        department: department,
        updated_at: updated_at
    }
}