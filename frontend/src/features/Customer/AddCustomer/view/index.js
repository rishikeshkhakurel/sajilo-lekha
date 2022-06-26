import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import useCustomer from "../hooks/useCustomer";

export default function AddCustomer() {
  const {
    handleSubmit,
    handleOnChange,
    formvalue,
    errors,
  } = useCustomer();

  return (
    <Box sx={{ m: 4 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            sx={{ width: "45%" }}
            id="filled-name"
            label="Name"
            name="customerName"
            required
            InputLabelProps={{ shrink: true }}
            onChange={handleOnChange}
            error={Boolean(errors.customerName)}
            helperText={errors.cutomerName}
          />
          <TextField
            sx={{ width: "45%" }}
            id="filled-name"
            label="Phone Number"
            name="contact_No"
            type="number"
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.contact_No)}
            helperText={errors.contact_No}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <TextField
            sx={{ width: "45%" }}
            id="filled-name"
            label="Address"
            name="address"
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.address)}
            helperText={errors.address}
          />
          <TextField
            sx={{ width: "45%" }}
            id="filled-name"
            label="Contractor_Name"
            name="contractor_Name"
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.contractor_Name)}
            helperText={errors.contractor_Name}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <TextField
            sx={{ width: "45%" }}
            id="filled-name"
            label="Contractor Number"
            type="number"
            name="contractor_ContactNo"
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.contractor_ContactNo)}
            helperText={errors.contractor_ContactNo}
          />

          <TextField
            sx={{ width: "45%" }}
            id="filled-name"
            label="Remark"
            name="remarks"
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.remarks)}
            helperText={errors.remarks}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <TextField
            sx={{ width: "45%" }}
            id="filled-name"
            label="Status"
            name="status"
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.status)}
            helperText={errors.status}
          />

          <TextField
            sx={{ width: "45%" }}
            id="filled-name"
            label="Credit Limit"
            name="credit_Limit"
            value={formvalue.credit_Limit}
            InputLabelProps={{ shrink: true }}
            required
            onChange={handleOnChange}
            error={Boolean(errors.credit_Limit)}
            helperText={errors.credit_Limit}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button type="submit" variant="contained">
            Add Customer
          </Button>
        </Box>
      </form>
    </Box>
  );
}
