<?php
// CORS対応ヘッダー（これを追加！）
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

// OPTIONSリクエスト（プリフライト）に対応
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// $to = "jimlee199481@gmail.com"; // 受信先メールアドレス
// $subject = "ポートフォリオサイトのお問い合わせフォームより";
// $body = "名前: $name\nメール: $email\n\nメッセージ:\n$message";
// $headers = "From: $email";

// $success = mail($to, $subject, $body, $headers);

// echo json_encode(["success" => $success]);


$data = json_decode(file_get_contents("php://input"), true);
$name = $data["name"] ?? '';
$email = $data["email"] ?? '';
$message = $data["message"] ?? '';

if (!$name || !$email || !$message) {
    echo json_encode(["success" => false, "error" => "すべての項目が必要です"]);
    exit;
}

// ★ログファイルに書き出すだけ（送信しない）
file_put_contents("contact_log.txt", "-----\n名前: $name\nメール: $email\nメッセージ: $message\n", FILE_APPEND);

echo json_encode(["success" => true]);