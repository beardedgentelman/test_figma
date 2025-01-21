import { createTheme } from "@mantine/core";

export const theme = createTheme({
  components: {
    Button: {
      styles: () => ({
        root: {
          backgroundColor: "#2160FD",
          borderRadius: '6px',
          ':hover': {
            backgroundColor: "white",
          },
          height: "30px",
          outline: 'none',
          border: '2px solid #EFEFEF',
        },
      }),
    },
  },
});