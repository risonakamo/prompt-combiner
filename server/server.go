// run test server. looks for dir named build outside of this folder and tries to serve it.

package main

import (
	"fmt"
	"os"
	"os/exec"
	"path/filepath"

	"github.com/gofiber/fiber/v3"
)

func main() {
    var here string=getHereDirExe()

	var app *fiber.App=fiber.New(fiber.Config{
        CaseSensitive: true,
        ErrorHandler: func(c fiber.Ctx, err error) error {
            fmt.Println("fiber error")
            fmt.Println(err)
            return c.Status(fiber.StatusInternalServerError).SendString("Internal Server Error")
        },
    })

    app.Static("/",filepath.Join(here,"../build"))

    openTargetWithDefaultProgram("http://localhost:4200")
    app.Listen(":4200")
}

// give folder location of the exe that calls this func
func getHereDirExe() string {
    var exePath string
    var e error
    exePath,e=os.Executable()

    if e!=nil {
        panic(e)
    }

    return filepath.Dir(exePath)
}

// try to open web url or file with default program.
// essentially runs program like it was double clicked
func openTargetWithDefaultProgram(url string) {
    var cmd *exec.Cmd=exec.Command("cmd","/c","start",url)
    var e error=cmd.Run()

    if e!=nil {
        panic(e)
    }
}