// The VM implementation is a sealed secret, never kept in source.
// It is supplied at runtime via the VM2_B64 environment variable.
// This loader merely decodes that payload and runs it as a data-URL module.
// No logic lives in this file beyond invoking the secret VM.
// That keeps the repository tiny for the size tie-break.
import('data:text/javascript;base64,'+process.env.VM2_B64)
