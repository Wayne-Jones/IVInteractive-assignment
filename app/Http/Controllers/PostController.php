<?php



namespace App\Http\Controllers;



use Illuminate\Http\Request;



class PostController extends Controller

{

    /**

     * success response method.

     *

     * @return \Illuminate\Http\Response

     */

    public function testInput($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    public function formSubmit(Request $request)
    {
        $name = $this->testInput($request->input('name'));
        if (empty($name)) {
            $nameErr = "Name is Required";
        }
        $email = $this->testInput($request->input('email'));
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
        }
        if (empty($email)) {
            $emailErr = "Email is Required";
        }

        $phone = $this->testInput($request->input('phone'));
        $phoneRegEx = '/\(?[2-9][0-8][0-9]\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4}/';
        if (!preg_match($phoneRegEx, $phone)) {
            $phoneErr = "Invalid phone format";
        }
        if (empty($phone)) {
            $phoneErr = "Phone Number is Required";
        }
        $inquiry = $this->testInput($request->input('inquiry'));
        $message = $this->testInput($request->input('message'));

        if (!empty($emailErr) || !empty($phoneErr) || !empty($nameErr)) {
            $nameErr = !empty($nameErr) ? $nameErr : null;
            $emailErr = !empty($emailErr) ? $emailErr : null;
            $phoneErr = !empty($phoneErr) ? $phoneErr : null;
            $jsonMessage = ['nameErr' => $nameErr, 'emailErr' => $emailErr, 'phoneErr' => $phoneErr];
            return response()
                ->json($jsonMessage, 400);
        }

        return response()
            ->json("Completed", 200);
    }
}
