// VM source is a sealed secret
// supplied in the VM_B64 env var
// This loader only decodes
// and runs that VM source
// No other code here
eval(Buffer.from(process.env.VM_B64,'base64').toString())
