import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type Screen = "login" | "menu" | "select" | "practice" | "result" | "history"

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("login")

  const mockData = {
    practiceResults: [
      { date: "2024-01-15 14:30", topic: "IT用語", score: 8500, wpm: 245, accuracy: "95%" },
      { date: "2024-01-15 13:15", topic: "ビジネス用語", score: 7200, wpm: 220, accuracy: "92%" },
      { date: "2024-01-14 16:45", topic: "基本単語", score: 6800, wpm: 210, accuracy: "88%" },
    ]
  }

  const screens = [
    { key: "login", name: "ログイン" },
    { key: "menu", name: "メニュー" },
    { key: "select", name: "お題選択" },
    { key: "practice", name: "練習中" },
    { key: "result", name: "結果" },
    { key: "history", name: "履歴" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ナビゲーション */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-center mb-4">タイピング練習アプリ - モックアップカタログ</h1>
          <p className="text-center text-muted-foreground mb-4">shadcn/ui版</p>
          <div className="flex flex-wrap justify-center gap-2">
            {screens.map((screen) => (
              <Button
                key={screen.key}
                onClick={() => setCurrentScreen(screen.key as Screen)}
                variant={currentScreen === screen.key ? "default" : "outline"}
                size="sm"
              >
                {screen.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8">
        {/* 1. ログイン画面 */}
        {currentScreen === "login" && (
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle>ログイン</CardTitle>
              <CardDescription>アカウントにログインしてください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">メールアドレス</label>
                <Input type="email" placeholder="example@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">パスワード</label>
                <Input type="password" placeholder="パスワードを入力" />
              </div>
              <Button className="w-full">ログイン</Button>
              <div className="text-center">
                <Button variant="link">アカウントを作成する</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 2. メニュー画面 */}
        {currentScreen === "menu" && (
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">タイピング練習</CardTitle>
              <CardDescription>お疲れさまです、user@example.com さん</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="cursor-pointer hover:shadow-md transition-shadow bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">練習を始める</CardTitle>
                    <CardDescription className="text-blue-100">お題を選んでタイピング練習を開始しましょう</CardDescription>
                  </CardHeader>
                </Card>
                <Card className="cursor-pointer hover:shadow-md transition-shadow bg-gradient-to-br from-green-500 to-green-600 text-white">
                  <CardHeader>
                    <CardTitle className="text-white">練習履歴</CardTitle>
                    <CardDescription className="text-green-100">過去の練習結果を確認できます</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div className="text-center mt-8">
                <Button variant="ghost">ログアウト</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 3. お題選択画面 */}
        {currentScreen === "select" && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>お題を選択</CardTitle>
                <Button variant="ghost">← メニューに戻る</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="cursor-pointer hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">基本単語</CardTitle>
                    <CardDescription>初心者向けの基本的な単語</CardDescription>
                    <div className="text-xs text-muted-foreground">問題数: 50</div>
                  </CardHeader>
                </Card>
                <Card className="cursor-pointer hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">ビジネス用語</CardTitle>
                    <CardDescription>仕事でよく使われる用語</CardDescription>
                    <div className="text-xs text-muted-foreground">問題数: 75</div>
                  </CardHeader>
                </Card>
                <Card className="cursor-pointer hover:border-primary transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg">IT用語</CardTitle>
                    <CardDescription>プログラマー向けの専門用語</CardDescription>
                    <div className="text-xs text-muted-foreground">問題数: 100</div>
                  </CardHeader>
                </Card>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 4. タイピング練習画面 */}
        {currentScreen === "practice" && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <div>問題 3/15</div>
                <div>残り時間: 02:45</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center space-y-6">
                <div className="text-3xl font-bold">プログラミング言語</div>
                <div className="text-xl text-muted-foreground">ぷろぐらみんぐげんご</div>
                <div className="text-lg font-mono bg-muted p-4 rounded">
                  <span className="text-green-600">progura</span>
                  <span className="bg-yellow-200">m</span>
                  <span className="text-muted-foreground">ingugengo</span>
                </div>
                <div className="flex justify-center items-center space-x-6 text-sm text-muted-foreground">
                  <div>WPM: 245</div>
                  <div>正解率: 95%</div>
                  <div>ミス: 2</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 5. 練習結果画面 */}
        {currentScreen === "result" && (
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="mb-4">練習結果</CardTitle>
              <div className="text-6xl font-bold text-primary mb-2">A+</div>
              <CardDescription>スコア: 8,500点</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="text-center p-4">
                    <div className="text-2xl font-bold">245</div>
                    <div className="text-sm text-muted-foreground">WPM</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="text-center p-4">
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm text-muted-foreground">正解率</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="text-center p-4">
                    <div className="text-2xl font-bold">03:24</div>
                    <div className="text-sm text-muted-foreground">タイム</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="text-center p-4">
                    <div className="text-2xl font-bold">8</div>
                    <div className="text-sm text-muted-foreground">ミス数</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-2">
                <Card>
                  <CardContent className="flex justify-between items-center p-3">
                    <span className="font-medium">プログラミング言語</span>
                    <div className="text-sm text-muted-foreground space-x-4">
                      <span>WPM: 250</span>
                      <span>ミス: 1</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex justify-between items-center p-3">
                    <span className="font-medium">データベース</span>
                    <div className="text-sm text-muted-foreground space-x-4">
                      <span>WPM: 240</span>
                      <span>ミス: 0</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center space-x-4">
                <Button>もう一度練習</Button>
                <Button variant="secondary">メニューに戻る</Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 6. 練習履歴画面 */}
        {currentScreen === "history" && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>練習履歴</CardTitle>
                <Button variant="ghost">← メニューに戻る</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>日時</TableHead>
                    <TableHead>お題</TableHead>
                    <TableHead>スコア</TableHead>
                    <TableHead>WPM</TableHead>
                    <TableHead>正解率</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockData.practiceResults.map((result, index) => (
                    <TableRow key={index}>
                      <TableCell>{result.date}</TableCell>
                      <TableCell>{result.topic}</TableCell>
                      <TableCell className="font-semibold">{result.score.toLocaleString()}</TableCell>
                      <TableCell>{result.wpm}</TableCell>
                      <TableCell>{result.accuracy}</TableCell>
                      <TableCell>
                        <Button variant="link" size="sm">詳細</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="flex justify-center mt-6">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">1</Button>
                  <Button size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default App
